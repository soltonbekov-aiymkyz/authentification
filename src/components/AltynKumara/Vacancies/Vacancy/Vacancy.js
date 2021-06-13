import axios from "axios";
import { useHistory } from "react-router";
import classes from "./Vacancy.module.css";

const Vacancy = ({ match }) => {
  const occupations = [];


  switch(match.params.id){
    case 'waiter':
      occupations.push(
        <select key={match.params.id} required name='occupation'>
          <option>Официант</option>
          <option>Раннер</option>
          <option>Хостес</option>
        </select>
      )
      break
    case 'admin':
      occupations.push(
        <select key={match.params.id} required name='occupation'>
          <option>Администратор</option>
          <option>Кассир</option>
        </select>
      )
      break
    case 'chef':
      occupations.push(
        <select key={match.params.id} required name='occupation'>
          <option>Повар универсал</option>
          <option>Шашлычник</option>
          <option>Салатник</option>
          <option>Суши-мастер</option>
          <option>Пиццейола</option>
        </select>
      )
      break
    case 'cleaner':
      occupations.push(
        <select required name='occupation'>
          <option>Посудомойщица</option>
          <option>Уборщица</option>
        </select>
      )
      break

    default:
      break
  
  }

  const history = useHistory();


  function onSubmitCallback(event){
    const data = new FormData(event.target)
    event.preventDefault()




    // axios.post('https://altyn-kumara-a0de6-default-rtdb.firebaseio.com/vacancies.json' ,{
      
     axios.post('https://authentification-react-a22ac-default-rtdb.firebaseio.com/vacancies.json' ,{
      // '1) имя': data.get('first-name'),
      // '2) фамилия': data.get('last-name'),
      // '3) возраст': data.get('age'),
      // '4) должность': data.get('occupation'),
      // '5) стаж_работы': data.get('exp'),
      // '6) график_работы': data.get('graph'),
      // '7) номер_телефона': data.get('phone')

      '1)fist-name': data.get('first-name'),
      '2)last-name': data.get('last-name'),
      '3) age': data.get('age'),
      '4) occupation': data.get('occupation'),
      '5) exp': data.get('exp'),
      '6) graph': data.get('graph'),
      '7) phone': data.get('phone')
    })
    setTimeout(()=>{
      history.push('/')
    }, 1000)
  }


  return (
    <div className={classes.Vacancy}>
      <form onSubmit={onSubmitCallback}>
        <label htmlFor='first-name'>Имя</label>
        <input required type='text' name='first-name' />
        <label htmlFor='last-name'>Фамилия</label>
        <input required type='text' name='last-name' />
        <label htmlFor='age'>Возраст</label>
        <input required type='number' name='age' />
        <label htmlFor='occupation'>Должность</label>
        {occupations}
        <label htmlFor='exp'>Стаж работы</label>
        <select required name='exp'>
          <option>Без опыта</option>
          <option>Меньше года</option>
          <option>1-4 года</option>
          <option>Больше 4 лет</option>
        </select>
        <label htmlFor='graph'>График</label>
        <select required name='graph'>
          <option>3 дня в неделю</option>
          <option>4 дня в неделю</option>
          <option>5 дней в неделю</option>
        </select>
        <label htmlFor='phone'>Номер телефона</label>
        <input required type='phone' name='phone' />
        <button className={classes.submitBtn}>Отправить</button>
      </form>
    </div>
  );
}

export default Vacancy;