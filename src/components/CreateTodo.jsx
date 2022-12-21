import React from 'react'
import { useForm } from 'react-hook-form';

type Props = {}

const CreateTodo = (props: Props) => {
    

    
      const onSubmit = (formdata) => {
        console.log(data);
          const data = { id: 3, title: 'Item 4', data:"aa", location:"aahh"};
          const arrayString = JSON.stringify(data.concat(newItem));
          localStorage.setItem("todoData", arrayString);
        
      };
      
      const { register, handleSubmit } = useForm();
      
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email:
            <input type="email" name="email" ref={register({ required: true })} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" ref={register({ required: true })} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      );
    
}

export default CreateTodo