import styles from './fooditem.module.css'
function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} alt="Image of dish" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View Recipe</button>
      </div>      
    </div>
  )
}

export default FoodItem
