import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://still-woodland-21576.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return reviews;
}
export default useReviews;