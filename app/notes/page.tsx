'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

const SupabaseTest: React.FC = () => {
    const [notes, setNotes] = useState<any[] | null>(null)
    const supabase = createClient()

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from('notes').select()
            setNotes(data)
        }
        getData()
    }, [])

    return (<pre>{JSON.stringify(notes, null, 2)}</pre>)
}

export default SupabaseTest;

