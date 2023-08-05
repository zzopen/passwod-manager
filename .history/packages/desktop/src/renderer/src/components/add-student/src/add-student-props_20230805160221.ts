import { ExtractPropTypes } from 'vue'

export const addStudentProps = {} as const

export type AddStudent = ExtractPropTypes<typeof addStudent>
