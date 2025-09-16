'use client';

import { useState, useEffect } from 'react';
import { Plus, FileText, Trash2, Edit, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TopNav from '@/components/TopNav';
import { problems } from '@/lib/problems';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');

  const currentProblem = problems[0]; // Default problem for TopNav

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('leetcode-notes');
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes).map((note: Note) => ({
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
    setEditingTitle(newNote.id);
    setNewTitle('New Note');
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
    if (title.trim()) {
      setNotes(prev => prev.map(note => 
        note.id === noteId 
          ? { ...note, title: title.trim(), updatedAt: new Date() }
          : note
      ));
    }
    setEditingTitle(null);
    setNewTitle('');
  };

  const startEditingTitle = (noteId: string, currentTitle: string) => {
    setEditingTitle(noteId);
    setNewTitle(currentTitle);
  };

  const selectedNote = notes.find(note => note.id === selectedNoteId);

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <TopNav
        currentProblem={currentProblem}
        onProblemChange={() => {}}
        onRun={() => {}}
        onSubmit={() => {}}
        onShuffle={() => {}}
      />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Notes List */}
        <div className="w-80 bg-[#262626] border-r border-[#404040] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-[#404040]">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-white">Notes</h1>
              <Link 
                href="/"
                className="text-[#8c8c8c] hover:text-white transition-colors"
                title="Back to Problems"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            <button
              onClick={createNewNote}
              className="flex items-center space-x-2 w-full bg-[#ffa116] hover:bg-[#e6910a] text-[#1a1a1a] px-4 py-2 rounded font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Note</span>
            </button>
          </div>

          {/* Notes List */}
          <div className="flex-1 overflow-y-auto">
            {notes.length === 0 ? (
              <div className="p-4 text-center text-[#8c8c8c]">
                <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No notes yet</p>
                <p className="text-sm">Create your first note to get started</p>
              </div>
            ) : (
              <div className="p-2">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors group ${
                      selectedNoteId === note.id
                        ? 'bg-[#404040] border border-[#ffa116]'
                        : 'bg-[#1a1a1a] hover:bg-[#333333]'
                    }`}
                    onClick={() => setSelectedNoteId(note.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      {editingTitle === note.id ? (
                        <input
                          type="text"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          onBlur={() => updateNoteTitle(note.id, newTitle)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              updateNoteTitle(note.id, newTitle);
                            } else if (e.key === 'Escape') {
                              setEditingTitle(null);
                              setNewTitle('');
                            }
                          }}
                          className="bg-[#404040] text-white px-2 py-1 rounded text-sm flex-1 mr-2"
                          autoFocus
                          onClick={(e) => e.stopPropagation()}
                        />
                      ) : (
                        <h3 
                          className="font-medium text-white truncate flex-1 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditingTitle(note.id, note.title);
                          }}
                        >
                          {note.title}
                        </h3>
                      )}
                      
                      <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {editingTitle !== note.id && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                startEditingTitle(note.id, note.title);
                              }}
                              className="p-1 text-[#8c8c8c] hover:text-white transition-colors"
                              title="Edit title"
                            >
                              <Edit className="w-3 h-3" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNote(note.id);
                              }}
                              className="p-1 text-[#8c8c8c] hover:text-red-400 transition-colors"
                              title="Delete note"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-[#8c8c8c] text-sm truncate mb-1">
                      {note.content || 'No content'}
                    </p>
                    <p className="text-[#666666] text-xs">
                      {note.updatedAt.toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content - Note Editor */}
        <div className="flex-1 flex flex-col">
          {selectedNote ? (
            <>
              {/* Note Header */}
              <div className="p-4 border-b border-[#404040] bg-[#262626]">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">{selectedNote.title}</h2>
                    <p className="text-sm text-[#8c8c8c]">
                      Last updated: {selectedNote.updatedAt.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-[#8c8c8c] bg-[#404040] px-2 py-1 rounded">
                      Auto-saved
                    </span>
                  </div>
                </div>
              </div>

              {/* Note Content Editor */}
              <div className="flex-1 p-4">
                <textarea
                  value={selectedNote.content}
                  onChange={(e) => updateNoteContent(selectedNote.id, e.target.value)}
                  className="w-full h-full bg-transparent text-white resize-none outline-none placeholder-[#8c8c8c] leading-relaxed"
                  placeholder="Start writing your note..."
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-[#8c8c8c]">
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">Select a note to edit</h3>
                <p>Choose a note from the sidebar or create a new one</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
