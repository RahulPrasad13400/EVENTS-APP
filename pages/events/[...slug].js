import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/events/results-title"
import { Fragment } from "react"
import Button from "../../components/ui/button"

export default function FilteredEventsPage() {
  const router = useRouter()
  const filteredData = router.query.slug
  
  if(!filteredData){
    return <p className="center">Loading..</p>
  }

  const filteredYear = filteredData[0]
  const filteredMonth = filteredData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if(isNaN(numYear) || isNaN(numMonth)){
    return <Fragment>
      <p>Invalid filter please adjust your values!</p>
      <div className="center">
        <Button link={'/events'}>Show all Events</Button>
      </div>
    </Fragment> 
  }

  const filteredEvents = getFilteredEvents({year : numYear, month : numMonth})
  if(!filteredEvents || filteredEvents.length === 0){
    return <Fragment>
      <p>No Events found for the choose filter!</p>
      <div className="center">
        <Button link={'/events'}>Show all Events</Button>
      </div>
    </Fragment> 
  }

  const date = new Date(numYear, numMonth-1)  
  console.log("hello")
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}
