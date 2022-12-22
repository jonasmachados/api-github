import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

    return (
        <ItemContainer>
            <div>
                <h3>{repo.name}</h3>
                <p>{repo.full_name}</p>
                <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
                <button onClick={handleRemove}>Remover</button>
            </div>
            <div>
                <img src={repo.owner.avatar_url} alt="" />
            </div>
            <div>
                <hr />
            </div>

        </ItemContainer>
    )
}

export default ItemRepo;