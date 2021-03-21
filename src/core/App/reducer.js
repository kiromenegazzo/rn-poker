import { dict, langs, RU } from 'constants/intl';

export const SET_LANG = 'SET_LANG';
export const SET_HAND = 'SET_HAND';
export const SET_MODAL_CLOSE = 'SET_MODAL_CLOSE';

export const initialState = {
  dictionary: dict,
  langs,
  lang: RU,
  hands: [...dict[RU].hands],
  hand: null,
  isLoaded: false,
  coordinates: null,
  sprite: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LANG: {
      const { hands } = dict[payload];

      return {
        ...state,
        lang: payload,
        hands,
      };
    }
    case SET_HAND:
      return {
        ...state,
        hand: payload,
      };
    case SET_MODAL_CLOSE:
      return {
        ...state,
        hand: null,
      };
    default:
      throw new Error();
  }
};
