import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
import { data } from "../helpers/data"
import PlayerCard from "./PlayerCard"

const ContainerCard = () => {
  const [search, setSearch] = useState("")

  // console.log(data)

  const handleChange = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value) // setter metotları async çalışır
    // console.log(search)
  }
  // console.log(search)

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  )
  // console.log(filterData)

  return (
    <>
      <Form.Control
        type="search"
        //value={search}
        placeholder="Search Player..."
        onChange={handleChange}
      />
      <Container className="p-3 rounded-4 card-container my-3">
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center g-3">
          {filterData.map((player, index) => (
            <PlayerCard key={index} {...player} />
            // <PlayerCard
            //   key={index}
            //   player={player}
            //   img={player.img}
            //   name={player.name}
            //   statistics={player.statistics}
            // />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default ContainerCard
