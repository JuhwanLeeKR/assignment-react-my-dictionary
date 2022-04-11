import {
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore';

import { db } from '../../../firebase';

// InitState
const initialState = {
  isLoaded: false,
  wordList: [],
};

// Action Type
const LOAD = 'LOAD';
const CREATE = 'CREATE';
const EDIT = 'EDIT';
const COMPLETE = 'COMPLETE';
const DELETE = 'DELETE';
const LOADED = 'LOADED';

// Action Creator
export const loadWordList = (wordList) => {
  return { type: LOAD, wordList };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};

export const editWord = (id, wordData) => {
  return { type: EDIT, id, wordData };
};

export const completeWord = (id, isCompleted) => {
  return { type: COMPLETE, id, isCompleted };
};

export const deleteWord = (id) => {
  return { type: DELETE, id };
};

export const isLoadedWordList = (isLoaded) => {
  return { type: LOADED, isLoaded };
};

// Middle Ware Action Creator
export const loadWordListFB = () => {
  return async function (dispatch) {
    const _wordList = await getDocs(
      query(collection(db, 'dictionary'), orderBy('createAt', 'desc'))
    );

    const wordList = [];

    _wordList.forEach((word) => {
      wordList.push({ id: word.id, ...word.data() });
    });

    dispatch(loadWordList(wordList));
  };
};

export const addWordFB = (wordData) => {
  return async function (dispatch) {
    dispatch(isLoadedWordList(false));

    const docRef = await addDoc(collection(db, 'dictionary'), wordData);

    const newWord = { id: docRef.id, ...wordData };

    dispatch(createWord(newWord));
  };
};

export const editWordFB = (id, wordData) => {
  return async function (dispatch) {
    dispatch(isLoadedWordList(false));

    const docRef = doc(db, 'dictionary', id);
    await updateDoc(docRef, wordData);

    dispatch(editWord(id, wordData));
  };
};

export const completeWordFB = (id, isCompleted) => {
  return async function (dispatch) {
    dispatch(isLoadedWordList(false));

    const docRef = doc(db, 'dictionary', id);
    await updateDoc(docRef, { isCompleted });

    dispatch(completeWord(docRef.id, isCompleted));
  };
};

export const deleteWordFB = (id) => {
  return async function (dispatch) {
    dispatch(isLoadedWordList(false));

    const docRef = doc(db, 'dictionary', id);
    await deleteDoc(docRef);

    dispatch(deleteWord(docRef.id));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      const loadedWordList = { wordList: action.wordList, isLoaded: true };

      return loadedWordList;
    }

    case CREATE: {
      const updatedWordList = {
        wordList: [action.word, ...state.wordList],
        isLoaded: true,
      };

      //console.log(updatedWordList);

      return updatedWordList;
    }

    case EDIT: {
      const _updatedWordList = state.wordList.map((word) => {
        if (word.id === action.id) {
          return { ...word, ...action.wordData };
        }
        return word;
      });

      const updatedWordList = {
        wordList: _updatedWordList,
        isLoaded: true,
      };

      return updatedWordList;
    }

    case COMPLETE: {
      const completedWordList = state.wordList.map((word) => {
        if (word.id === action.id) {
          return { ...word, isCompleted: action.isCompleted };
        }
        return word;
      });

      const updatedWordList = {
        wordList: completedWordList,
        isLoaded: true,
      };

      return updatedWordList;
    }

    case DELETE: {
      const filterWordList = state.wordList.filter((word) => {
        return word.id !== action.id;
      });

      const updatedWordList = {
        wordList: filterWordList,
        isLoaded: true,
      };

      return updatedWordList;
    }

    case LOADED: {
      return { ...state, isLoaded: action.isLoaded };
    }

    default: {
      return state;
    }
  }
}
