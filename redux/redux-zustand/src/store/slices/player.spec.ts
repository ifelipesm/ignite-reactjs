import { expect, describe, it } from 'vitest';
import { player as reducer, play, next, PlayerState } from './player' 

  const initialState: PlayerState = {
    course: {
      id: 1,
      modules: [
        {
          id: 1,
          title: 'Iniciando com React',
          lessons: [
            { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
            { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' },

          ],
        },
        {
          id: 2,
          title: 'Estrutura da aplicação',
          lessons: [
            { id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' },
            { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' },
          ],
        },
      ],
    },
    isLoading: false,
    currentLessonIndex: 0,
    currentModuleIndex: 0,
  }

  describe('player slice', () => {
    it('should be able to play',() => {
      
      const state = reducer(initialState,play([1,2]))

      expect(state.currentModuleIndex).toEqual(1)
      expect(state.currentLessonIndex).toEqual(2)
    })
  })
    it('should be able to play the next video',() => {
      
      const state = reducer(initialState,next())

      expect(state.currentModuleIndex).toEqual(0)
      expect(state.currentLessonIndex).toEqual(1)
    })
    it('should be able to jump to the next module',() => {
      
      const state = reducer({
        ...initialState,
        currentLessonIndex: 1,
      }, next())

      expect(state.currentModuleIndex).toEqual(1)
      expect(state.currentLessonIndex).toEqual(0)
    })
    it('should not update the current module and lesson index when there is no lesson available',() => {
      
      const state = reducer({ 
        ...initialState,
        currentModuleIndex: 1,
        currentLessonIndex: 1,
      }, next())

      expect(state.currentModuleIndex).toEqual(1)
      expect(state.currentLessonIndex).toEqual(1)
    })