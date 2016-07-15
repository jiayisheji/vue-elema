export default function(router) {
    router.map({
        '*': {
            component(resolve) {
                require(['./views/welcome'], resolve);
            }
        },
        '/': {
            component(resolve) {
                require(['./views/welcome'], resolve);
            }
        },
        '/index': {
            'name': 'index',
            'component': function(resolve) {
                require(['./views/index'], resolve);
            }
        },
        '/jobs': {
            'name': 'jobs',
            'component': function(resolve) {
                require(['./views/jobs'], resolve);
            },
            'subRoutes': {
                '/fulltime': {
                    'name': 'fulltime',
                    'component': function(resolve) {
                        require(['./views/fulltime'], resolve);
                    }
                },
                '/intern': {
                    'name': 'intern',
                    'component': function(resolve) {
                        require(['./views/intern'], resolve);
                    }
                }
            }
        },
        '/job/:id': {
            'name': 'job',
            'component': function(resolve) {
                require(['./views/job'], resolve);
            }
        }
    });
}
