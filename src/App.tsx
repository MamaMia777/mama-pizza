import "bootstrap/dist/css/bootstrap.min.css"
import { useMemo } from "react"
import { Container } from "react-bootstrap"
import { Navigate, Route, Routes } from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import { EditNode } from "./EditNote"
import { NewNote } from "./NewNote"
import { Note } from "./Note"
import { NoteLayout } from "./NoteLayout"
import { NoteList } from "./NoteList"
import { useLocalStorage } from "./useLocalStorage"

export type Note = {
  id: string
} & NoteData


export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}
export type RawNote = {
  id: string
} & RawNoteData
export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]

}
export type Tag = {
  id: string
  label: string
}

function App() {
return <h1>Hello</h1>
}

export default App

