const Persons= ({ persons, searchFilter }) => {
    return (
      <>
        {(persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()))).map(person => 
        <div key={person.id}>
          {person.name} {person.number}
        </div>)}
      </>
    )
  }

export default Persons