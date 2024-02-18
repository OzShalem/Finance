import React, { ChangeEvent, FormEvent } from 'react'

interface Props {
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

const Search: React.FC<Props> = ({search, onClick, handleChange}: Props): JSX.Element => {
    
  return (
    <div>
        <input value={search} onChange={(e => handleChange(e))} />
        <button onClick={(e) => onClick(e)}></button>
    </div>
  )
}

export default Search