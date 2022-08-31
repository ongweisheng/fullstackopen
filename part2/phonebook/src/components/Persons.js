const Persons= ({ persons, searchFilter, onClick }) => {
    return (
      <>
        {(persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()))).map(person => 
        <div key={person.id}>
          {person.name} {person.number} <button id={person.id} name={person.name} onClick={onClick}>delete</button>
        </div>)}
      </>
    )
  }

export default Persons