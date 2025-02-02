import EventList from "./ScheduledEvents"

type Event = {
    id: number;
    medication: string;
    dosage: string;
    time: string;
  };
  

const Intro:React.FC = () => {
    const schedule: Event[] = [
        { id: 1, medication: 'Lisinopril', dosage: '10mg', time: '8:00 AM' },
        { id: 2, medication: 'Sertraline', dosage: '50mg', time: '9:00 AM' },
        { id: 3, medication: 'Metformin', dosage: '500mg', time: '12:00 PM' },
        { id: 4, medication: 'Levothyroxine', dosage: '75mcg', time: '7:00 PM' },
        { id: 5, medication: 'Omeprazole', dosage: '20mg', time: '9:30 PM' },
      ];

    return (
        <div>
            <div className="text-5xl font-bold mb-6">Hey,<br/> Nathan!</div>
            <div >Start the day strong! Make sure to take your meds!</div>
            <div className="italic mb-8">You got this!🌠</div>
            <EventList events={schedule}/>
        </div>
    )
}

export default Intro