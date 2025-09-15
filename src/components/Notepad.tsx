'use client';

import { useState, useEffect } from 'react';
import { X, Plus, FileText, Trash2, Edit } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NotepadProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Notepad({ isOpen, onClose }: NotepadProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingTitle, setEditingTitle] = useState<string | null>(null);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('leetcode-notes');
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt)
        }));
        setNotes(parsedNotes);
      } catch (error) {
        console.error('Failed to load notes:', error);
      }
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('leetcode-notes', JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'New Note',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setNotes(prev => [newNote, ...prev]);
    setSelectedNoteId(newNote.id);
    setIsCreating(false);
    setEditingTitle(newNote.id);
  };

  const deleteNote = (noteId: string) => {
    setNotes(prev => prev.filter(note => note.id !== noteId));
    if (selectedNoteId === noteId) {
      setSelectedNoteId(null);
    }
  };

  const updateNoteContent = (noteId: string, content: string) => {
    setNotes(prev => prev.map(note => 
      note.id === noteId 
        ? { ...note, content, updatedAt: new Date() }
        : note
    ));
  };

  const updateNoteTitle = (noteId: string, title: string) => {
    setNotes(prev => prev.map(note => 
      note.id === noteId 
        ? { ...note, title, updatedAt: new Date() }
        : note
    ));
    setEditingTitle(null);
  };

  const selectedNote = notes.find(note => note.id === selectedNoteId);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg w-5/6 h-5/6 max-w-6xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#262626]">
          <h2 className="text-lg font-semibold text-white">Notepad</h2>
          <button
            onClick={onClose}
            className="text-[#8c8c8c] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Notes List */}
          <div className="w-1/3 border-r border-[#262626] flex flex-col">
            <div className="p-4 border-b border-[#262626]">
              <button
                onClick={createNewNote}
                className="w-full bg-[#ffa116] hover:bg-[#ff8c00] transition-colors text-black px-4 py-2 rounded text-sm font-medium flex items-center justify-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>New Note</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {notes.length === 0 ? (
                <div className="p-4 text-center text-[#8c8c8c]">
                  <FileText className="w-8 h-8 mx-auto mb-2" />
                  <p>No notes yet</p>
                </div>
              ) : (
                <div className="space-y-1 p-2">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className={`p-3 rounded cursor-pointer transition-colors group ${
                        selectedNoteId === note.id
                          ? 'bg-[#ffa116]/20 border border-[#ffa116]/30'
                          : 'hover:bg-[#262626]'
                      }`}
                      onClick={() => setSelectedNoteId(note.id)}
                    >
                      <div className="flex items-center justify-between">
                        {editingTitle === note.id ? (
                          <input
                            type="text"
                            value={note.title}
                            onChange={(e) => updateNoteTitle(note.id, e.target.value)}
                            onBlur={() => setEditingTitle(null)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                setEditingTitle(null);
                              }
                            }}
                            className="bg-[#404040] text-white text-sm font-medium rounded px-2 py-1 w-full"
                            autoFocus
                          />
                        ) : (
                          <h3 
                            className="text-white text-sm font-medium truncate cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingTitle(note.id);
                            }}
                          >
                            {note.title}
                          </h3>
                        )}
                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingTitle(note.id);
                            }}
                            className="text-[#8c8c8c] hover:text-white p-1"
                          >
                            <Edit className="w-3 h-3" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteNote(note.id);
                            }}
                            className="text-[#8c8c8c] hover:text-[#ef4444] p-1"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <p className="text-[#8c8c8c] text-xs mt-1">
                        {note.updatedAt.toLocaleDateString()} {note.updatedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      {note.content && (
                        <p className="text-[#b3b3b3] text-xs mt-2 truncate">
                          {note.content.substring(0, 50)}...
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Note Editor */}
          <div className="flex-1 flex flex-col">
            {selectedNote ? (
              <>
                <div className="p-4 border-b border-[#262626]">
                  <h3 className="text-white font-medium">{selectedNote.title}</h3>
                  <p className="text-[#8c8c8c] text-sm">
                    Created: {selectedNote.createdAt.toLocaleDateString()}, 
                    Updated: {selectedNote.updatedAt.toLocaleDateString()}
                  </p>
                </div>
                <div className="flex-1 p-4">
                  <textarea
                    value={selectedNote.content}
                    onChange={(e) => updateNoteContent(selectedNote.id, e.target.value)}
                    placeholder="Start writing your note..."
                    className="w-full h-full bg-transparent text-white resize-none outline-none placeholder-[#8c8c8c]"
                  />
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-[#8c8c8c]">
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4" />
                  <p>Select a note to start writing</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
