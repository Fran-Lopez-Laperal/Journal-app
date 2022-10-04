//! Este fichero se usa para no tener que incrustar toda esta lógica de estados en el archivo de testing



export const initialState = {
    status: 'checking', //'checking','not-authenticatded' , 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
}

export const authenticatedState = {
    status: 'checking', //'checking','not-authenticatded' , 'authenticated'
        uid: '123ABC',
        email: 'demo@gmail.com',
        displayName: 'Demo User',
        photoURL: 'https://demo.jpf',
        errorMessage: null
}

export const notAuthenticatedState = {
    status: 'checking', //'checking','not-authenticatded' , 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
}

export const demoUser = {
    uid: 'ABC123',
    email: 'demo@gmail.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpf',
}