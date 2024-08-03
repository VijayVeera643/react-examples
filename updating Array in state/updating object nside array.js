import { useState } from 'react';

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];



export default function List() {
    const [mylist, setMyList] = useState(initialList);
    const [yourlist, setYourList] = useState(initialList);

    function handleToggleMyList(listId, nextSeen) {
        const nextMyList = [...mylist]
        const selectList = nextMyList.find(
            b => b.id === listId
        )
        selectList.seen = nextSeen;
        setMyList(nextMyList)
    }

    function handleToggleYourList(listId, nextSeen) {
        const nextyourList = [...yourlist]
        const selectList = nextyourList.find(
            b => b.id === listId
        );
        selectList.seen = nextSeen;
        setYourList(nextyourList)
    }
    return (
        <div>
            <div>
                <h1>The mylist</h1>
                <Items lists={mylist} onToggle={handleToggleMyList} />
            </div>
            <div>
                <h1>The yourlist</h1>
                <Items lists={yourlist} onToggle={handleToggleYourList} />
            </div>
        </div>
    )
}
function Items({ lists, onToggle }) {
    return (
        <ul>
            {lists.map(list =>
                <li key={list.id}>
                    <label>
                        <input
                            type='checkbox'
                            checked={list.seen}
                            onChange={e => {
                                onToggle( list.id,
                                     e.target.checked)
                            }}
                        />
                        {list.title}
                    </label>
                </li>
            )}
        </ul>
    )
}























































































































