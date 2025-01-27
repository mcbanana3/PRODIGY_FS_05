// postsAtom.js

import { atom } from 'recoil';

const postsAtom = atom({
    key: 'postsState',
    default: [],
});

export default postsAtom;
