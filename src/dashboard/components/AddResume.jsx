import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

function AddResume() {
    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState("");
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onCreate = async () => {
        setLoading(true);
        const uuid = uuidv4();
        const data = {
            data: {
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName,
            },
        };

        try {
            const resp = await GlobalApi.CreateNewResume(data);
            console.log(resp.data.data.documentId);
            if (resp) {
                navigate('/dashboard/resume/' + resp.data.data.documentId + "/edit");
            }
        } catch (error) {
            console.error("Error creating resume:", error);
        } finally {
            setLoading(false);
            setOpenDialog(false);
        }
    };

    return (
        <div>
            <div
                className="p-14 py-24 border 
                items-center flex 
                justify-center bg-secondary
                rounded-lg h-[280px]
                hover:scale-105 transition-all hover:shadow-md
                cursor-pointer border-dashed"
                onClick={() => setOpenDialog(true)}
            >
                <PlusSquare />
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            <p>Add a title for your new resume</p>
                            <Input
                                className="my-2"
                                placeholder="Ex. Full Stack Resume"
                                value={resumeTitle}
                                onChange={(e) => setResumeTitle(e.target.value)}
                            />
                        </DialogDescription>
                        <div className="flex justify-end gap-5">
                            <Button onClick={() => setOpenDialog(false)} variant="ghost">
                                Cancel
                            </Button>
                            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-purple-300 transition-all duration-300"
                                disabled={!resumeTitle || loading}
                                onClick={onCreate}
                            >
                                {loading ? (
                                    <div className="w-5 h-5 flex items-center justify-center ">
                                        <Loader2 className="animate-spin text-white" />
                                    </div>
                                ) : (
                                    "Create"
                                )}
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddResume;
