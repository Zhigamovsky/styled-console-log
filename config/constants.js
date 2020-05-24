export const $Errors = {
  ID_NOT_UNIQUE: {
    KEY: 'ID_NOT_UNIQUE',
    throw: value => ({
      type: 'ID_NOT_UNIQUE',
      value,
      message: `Immpossible to add own template '${value}'. '${value}' does exist in enumerable of props Log. Try enter another identifier.`
    }),
    message: value => `Immpossible to add own template '${value}'. '${value}' does exist in enumerable of props Log. Try enter another identifier.`
  },
  ICON_NOT_STRING: {
    KEY: 'ICON_NOT_STRING',
    throw: value => ({
      type: 'ICON_NOT_STRING',
      value,
      message: `Immpossible to add icon '${value}'. Icon must be a string.`
    }),
    message: value => `Immpossible to add icon '${value}'. Icon must be a string.`
  },
  STYLES_NOT_STRING: {
    KEY: 'ICON_NOT_STRING',
    throw: value => ({
      type: 'STYLES_NOT_STRING',
      value,
      message: `Immpossible to add styles '${value}'. Styles must be a string.`
    }),
    message: value => `Immpossible to add styles '${value}'. Styles must be a string.`
  },
}