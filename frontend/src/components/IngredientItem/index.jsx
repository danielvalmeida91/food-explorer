import { Container } from './styles'

export function IngredientItem({ isNew, value, onClick, ...rest }){
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ?
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 4.92407C0 4.73998 0.149238 4.59074 0.333333 4.59074H7.66667C7.85076 4.59074 8 4.73998 8 4.92407C8 5.10817 7.85076 5.25741 7.66667 5.25741H0.333333C0.149238 5.25741 0 5.10817 0 4.92407Z" fill="#7C7C8A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 0.924072C4.18409 0.924072 4.33333 1.07331 4.33333 1.25741V8.59074C4.33333 8.77483 4.18409 8.92407 4 8.92407C3.81591 8.92407 3.66667 8.77483 3.66667 8.59074V1.25741C3.66667 1.07331 3.81591 0.924072 4 0.924072Z" fill="#7C7C8A"/>
          </svg>
        :
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.88284 1.04123C8.03905 1.19744 8.03905 1.45071 7.88284 1.60691L0.682843 8.80692C0.526633 8.96313 0.273367 8.96313 0.117157 8.80692C-0.0390524 8.6507 -0.0390524 8.39744 0.117157 8.24123L7.31716 1.04123C7.47337 0.88502 7.72663 0.88502 7.88284 1.04123Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.117157 1.04123C0.273367 0.88502 0.526633 0.88502 0.682843 1.04123L7.88284 8.24123C8.03905 8.39744 8.03905 8.6507 7.88284 8.80692C7.72663 8.96313 7.47337 8.96313 7.31716 8.80692L0.117157 1.60691C-0.0390524 1.45071 -0.0390524 1.19744 0.117157 1.04123Z" fill="white"/>
          </svg>
        }
      </button>
    </Container>
  )
}