const Trivia = ({ category = [] }) => {
  return (
    <div>
      <form action="#">
        <h1>Esta es la trivia</h1>
        <select name="category" id="category">
          <option value="categories">{{ category }}</option>
        </select>
      </form>
    </div>
  )
}
export default Trivia
