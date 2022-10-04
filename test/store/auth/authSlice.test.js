import { authSlice, checkinCredentials, login, logout } from "../../../src/store/auth/authSlices"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures"

describe('pruebas en el authSlice', () => {

  test('debe de regresa el estado inicial y llamarse auth', () => {



    //! De esta manera accedemos a estado inicial de authenticated y también al estado del status
    //! const state = authSlice.reducer(initialState.status, {});
    //! console.log(state)
    //! expect( state ).toBe( 'checking' )


    const state = authSlice.reducer(initialState, {});

    // console.log(state)
    expect(state).toEqual(initialState)
    expect(authSlice.name).toBe('auth')
  })

  test('debe de realizar la autenticación', () => {

    // console.log(login(demoUser))

    const state = authSlice.reducer(initialState, login(demoUser))
    expect(state).toEqual({
      status: 'authenticated', //'checking','not-authenticatded' , 'authenticated'
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null
    })
  });


  test('debe de realizar el logout', () => {

    const state = authSlice.reducer(authenticatedState, logout());
    // console.log(state)
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined
    })

  });

  test('debe de realizar el logout y mostar un mensage de error', () => {

    const errorMessage = 'credenciales no son correctas'
    const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
    // console.log(state)
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage
    })

  })


  test('debde de cambiar el estado a checking', () => { 
    
    const state = authSlice.reducer(authenticatedState, checkinCredentials());
    console.log(state)
    expect(state.status).toBe('checking')

   })

});