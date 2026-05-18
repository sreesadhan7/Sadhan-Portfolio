'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
  timestamp: Date
}

const GREETING: Message = {
  id: 'greeting',
  role: 'assistant',
  text: "Hi! I'm Sree's AI assistant. Ask me anything about his experience, projects, skills, or background — I'm happy to help!",
  timestamp: new Date(),
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-portfolio-primary"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5
          ${isUser
            ? 'bg-portfolio-primary text-white'
            : 'bg-slate-200 dark:bg-slate-700 text-portfolio-primary'
          }`}
      >
        {isUser
          ? <User className="w-3.5 h-3.5" />
          : <Bot className="w-3.5 h-3.5" />
        }
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
          ${isUser
            ? 'bg-portfolio-primary text-white rounded-tr-sm'
            : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-tl-sm'
          }`}
      >
        {message.text}
      </div>
    </motion.div>
  )
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || isLoading) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })

      const data = await res.json()
      const reply = res.ok
        ? data.response
        : data.error ?? 'Something went wrong. Please try again.'

      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: 'assistant', text: reply, timestamp: new Date() },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          text: "Hmm, I couldn't reach the server. Please try again or contact Sree directly at sreesadhan.polimera11@gmail.com.",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [input, isLoading])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const suggested = [
    'What is Sree\'s experience?',
    'Tell me about his projects',
    'What are his key skills?',
  ]

  return (
    <>
      {/* Floating trigger button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.button
              key="open-btn"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setIsOpen(true)}
              className="relative w-14 h-14 bg-portfolio-primary hover:bg-portfolio-secondary text-white rounded-full shadow-2xl flex items-center justify-center transition-colors duration-200"
              aria-label="Open chat"
            >
              <MessageCircle className="w-6 h-6" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">1</span>
                </span>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-5rem)] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-portfolio-primary text-white flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight">Sree's Assistant</p>
                <p className="text-xs text-white/70 leading-tight">Ask me about Sree</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 min-h-0">
              {messages.map((m) => (
                <ChatMessage key={m.id} message={m} />
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-portfolio-primary" />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-sm">
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              {/* Suggested questions — shown only after greeting, before first user message */}
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-col gap-1.5 pt-1">
                  {suggested.map((q) => (
                    <button
                      key={q}
                      onClick={() => { setInput(q); inputRef.current?.focus() }}
                      className="text-left text-xs px-3 py-2 rounded-xl bg-portfolio-primary/8 hover:bg-portfolio-primary/15 text-portfolio-primary border border-portfolio-primary/20 transition-colors duration-150"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-slate-200 dark:border-slate-700 flex-shrink-0 bg-white dark:bg-slate-900">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Sree…"
                disabled={isLoading}
                maxLength={1000}
                className="flex-1 text-sm px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="flex-shrink-0 w-9 h-9 rounded-xl bg-portfolio-primary hover:bg-portfolio-secondary disabled:opacity-40 text-white flex items-center justify-center transition-all duration-200 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {isLoading
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <Send className="w-4 h-4" />
                }
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
