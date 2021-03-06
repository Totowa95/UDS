import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import get from "lodash/get";
import { Link } from "react-router-dom";
import Media from "react-media";

const FormCont = styled.form`
  width: ${({ small }) => (small ? "calc(100% - 50px)" : "400px")};
  background: white;
  padding: 20px 25px;
  margin: 100px auto;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  position: relative;

  input,
  textarea {
    font: inherit;
    padding: 10px;
    width: 100%;
    margin-top: 3px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    font-size: 13px;
    padding: 10px 30px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    color: rgba(0, 0, 0, 0.8);
    background: #fff;
    border-radius: 4px;
    transition: 0.4s;

    &:hover {
      transition: 0.4s;
      cursor: pointer;
      color: #0067b8;
      background: #fff;
    }

    &:focus {
      outline: none;
    }
  }
  label {
    color: #777;
    font-size: 11px;
    margin-bottom: 2px;
    display: block;
  }
  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin: 0 0 10px;
  }
`;

const Form = ({
  isSendingForm,
  sendEmail,
  disableText,
  isFile,
  title,
  withLogo,
}) => {
  const { register } = useForm();
  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    if (get(fileUploaded, "size") > 200000) {
      alert("File is too big! Max file size is 2MB");
    } else setFormState({ ...formState, fileUploaded });
  };

  return (
    <Media
      queries={{
        small: "(max-width: 729px)",
        large: "(min-width: 730px)",
      }}
    >
      {(size) => (
        <FormCont
          enctype="multipart/form-data"
          method="post"
          id="myform"
          className="form-cont-lg"
          onSubmit={sendEmail}
          small={size.small}
        >
          <h2
            style={{
              color: "#0067b8",
              textAlign: "center",
              margin: "0 0 30px 0",
            }}
          >
            {title}
          </h2>
          {withLogo && !size.small && (
            <img
              className="logo"
              src={require("../images/Logo_School.png")}
              style={{ position: "absolute", top: "15px", left: "15px" }}
              alt="logo"
            />
          )}

          <label>name</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            ref={register({ required: true, maxLength: 20 })}
          />

          <label>email</label>
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            ref={register({ required: true })}
          />

          <label>phone</label>
          <input
            type="tel"
            name="phone"
            ref={register({ required: true, maxLength: 18 })}
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
          />

          {!disableText && (
            <>
              <label>text</label>
              <textarea
                style={{ resize: "none" }}
                name="text"
                onChange={(e) =>
                  setFormState({ ...formState, text: e.target.value })
                }
              />
            </>
          )}

          {isFile && (
            <>
              <label htmlFor="file-upload" className="custom-file-upload">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Upload CV: .jpg, .jpeg, .png , .pdf
                  <img
                    src={require("../images/upload.png")}
                    alt="upload"
                    width={28}
                    height={18}
                    style={{ margin: "0 10px" }}
                  />
                  Max file size 2MB
                </div>
                <div
                  style={{
                    whiteSpace: "no-wrap",
                    maxWidth: "70px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {get(formState, "fileUploaded.name", "")}
                </div>
              </label>
              <input
                required
                onChange={handleChange}
                name="file"
                id="file-upload"
                type="file"
                accept=".jpg, .jpeg, .png , .pdf"
              />
            </>
          )}

          <button
            style={{
              opacity:
                (!formState ||
                  !formState.name ||
                  !formState.email ||
                  (isFile && !formState.fileUploaded) ||
                  !formState.phone) &&
                "0.5",
            }}
            disabled={
              !formState ||
              !formState.name ||
              !formState.email ||
              !formState.phone ||
              (isFile && !formState.fileUploaded)
            }
          >
            {isSendingForm ? "Sending..." : "Send"}
          </button>
        </FormCont>
      )}
    </Media>
  );
};

export default Form;
