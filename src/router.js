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
        '/job': {
            'name': 'job',
            'component': function(resolve) {
                require(['./views/job'], resolve);
            }
        },
        '/school': {
            'name': 'school',
            'component': function(resolve) {
                require(['./views/intern'], resolve);
            }
        },
        '/about': {
            'name': 'about',
            'component': function(resolve) {
                require(['./views/about'], resolve);
            },
            'subRoutes': {
                '/1': {
                    'name': 'about1',
                    'component': function(resolve) {
                        require(['./views/about/about1'], resolve);
                    }
                },
                '/2': {
                    'name': 'about2',
                    'component': function(resolve) {
                        require(['./views/about/about2'], resolve);
                    }
                },
                '/3': {
                    'name': 'about3',
                    'component': function(resolve) {
                        require(['./views/about/about3'], resolve);
                    }
                }
            }
        },
        '/signin': {
            'name': 'signin',
            'component': function(resolve) {
                require(['./views/user/signin'], resolve);
            }
        },
        '/signup': {
            'name': 'signup',
            'component': function(resolve) {
                require(['./views/user/signup'], resolve);
            }
        },
        '/forget': {
            'name': 'forget',
            'component': function(resolve) {
                require(['./views/user/forget'], resolve);
            }
        },
        '/user': {
            'name': 'user',
            'component': function(resolve) {
                require(['./views/user'], resolve);
            },
            'subRoutes': {
                '/': {
                    'name': 'home',
                    'component': function(resolve) {
                        require(['./views/user/home'], resolve);
                    }
                }
            }
        }
    });
    router.redirect({
        '/about': '/about/1'
    });
    router.beforeEach(transition => {
        console.log('开始切换之前: ', transition);
        if (transition.to.path.indexOf('/user') > -1) {
            router.go('signup');
        } else {
            transition.next();
        }
    });
    router.afterEach(transition => {
        document.body.scrollTop = 0;
        console.log('成功浏览到: ', transition);
    });
}
