import { authSlice } from "../../../src/store/auth/authSlices"
import { initialState } from "../../fixtures/authFixtures"

describe('pruebas en el authSlice', () => { 

    test('debe de regresa el estado inicial y llamarse auth', () => { 
        
           

            //! De esta manera accedemos a estado inicial de authenticated y también al estado del status
            //! const state = authSlice.reducer(initialState.status, {});
            //! console.log(state)
            //! expect( state ).toBe( 'checking' )
            
            
            const state = authSlice.reducer(initialState, {});

            console.log(state)
            expect( state ).toEqual( initialState )
            expect(authSlice.name).toBe('auth')

            

     })
 })