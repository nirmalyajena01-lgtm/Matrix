'use client';
import {create} from 'zustand';
type UiState={role:'STUDENT'|'RESPONDER'|'ADMIN';setRole:(role:UiState['role'])=>void};
export const useUiStore=create<UiState>(set=>({role:'STUDENT',setRole:role=>set({role})}));
