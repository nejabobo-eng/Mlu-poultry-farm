import { useEffect, useState, useRef } from "react"

export default function Stats() {
  const [eggs, setEggs] = useState(0)
  const [chickens, setChickens] = useState(0)
  const [customers, setCustomers] = useState(0)
  const [experience] = useState(2)
  
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const eggsTarget = 3500
          const chickensTarget = 8000
          const customersTarget = 250

          const duration = 2000
          const steps = 50
          const interval = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps

            setEggs(Math.floor(eggsTarget * progress))
            setChickens(Math.floor(chickensTarget * progress))
            setCustomers(Math.floor(customersTarget * progress))

            if (step >= steps) {
              clearInterval(timer)
              setEggs(eggsTarget)
              setChickens(chickensTarget)
              setCustomers(customersTarget)
            }
          }, interval)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasAnimated])

  const stats = [
    { label: "Eggs Produced Daily", value: eggs.toLocaleString(), icon: "🥚" },
    { label: "Birds Capacity", value: chickens.toLocaleString() + "+", icon: "🐔" },
    { label: "Happy Customers", value: customers.toLocaleString() + "+", icon: "😊" },
    { label: "Years Operating", value: experience + "+", icon: "⭐" }
  ]

  return (
    <section className="stats" ref={ref}>
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
