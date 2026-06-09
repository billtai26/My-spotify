import { Button } from "@/components/ui/button.tsx"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog.tsx"
import { useMusicStore } from "@/stores/useMusicStore.ts"
import { Plus } from "lucide-react"
import { useRef, useState } from "react"

const AddSongDialog = () => {
  const { albums } = useMusicStore()
  const [songDialogOpen, setSongDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    album: undefined,
    duration: 0
  })

  const [files, setFiles] = useState<{ audio: File | null, image: File | null }>({
    audio: null,
    image: null,
  })

  const audioInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async () => {}

  return (
    <Dialog open={songDialogOpen} onOpenChange={setSongDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
          <Plus className="mr-2 h-4 w-4" />
          Add Song
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-zinc-900 border-zinc-700 max-h-[80vh] overflow-auto">
        
      </DialogContent>
    </Dialog>
  )
}
export default AddSongDialog
