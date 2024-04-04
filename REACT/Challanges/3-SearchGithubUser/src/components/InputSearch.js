import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchUser = ({ setUsername }) => {
  const handleSearch = () => {
    const query = document.querySelector("#query");
    if (query.value) {
      setUsername(query.value);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <InputGroup className="mb-3 w-100">
          <Form.Control
            placeholder="Github's username"
            aria-label="Github's username"
            aria-describedby="basic-addon2"
            id="query"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Enter tuşuna basıldığında handleSearch'i tetikle
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchUser;
