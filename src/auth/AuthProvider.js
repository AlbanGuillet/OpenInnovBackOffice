const authProvider = {
    login: ({ username, password }) =>  {
        const body = JSON.stringify({
            email: username,
            password: password
        });
        const request = new Request(process.env.REACT_APP_API_URL + "/users/login", {
            method: 'POST',
            body: body,
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Content-Length': body.length
            }),
        });
        return fetch(request)
            .then(response => {
                console.log(response);
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
                localStorage.setItem('token', auth.token);
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    checkAuth: () => {
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve()
};

export default authProvider;