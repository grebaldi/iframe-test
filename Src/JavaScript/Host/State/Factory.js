import Immutable, { Set } from 'immutable';

export default (serverState) => {
    return Immutable.fromJS({
        tabs: {
            byId: {
                test: {
                  id: 'test',
                  src: 'guest.html',
                  title: 'Guest #1'
                },
                test2: {
                  id: 'test2',
                  src: 'guest.html',
                  title: 'Guest #2'
                },
                test3: {
                  id: 'test3',
                  src: 'guest.html',
                  title: 'Guest #3'
                }
            },
            active: 'test'
        },

        documents: {
            byId: {}
        }
    });
};
