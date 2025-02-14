import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2Icon, MoreVertical, FileText, Pencil, Eye, Download, Trash2, File } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import GlobalApi from './../../../service/GlobalApi';
import { toast } from 'sonner';

function ResumeCardItem({ resume, refreshData }) {
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId)
      .then(() => {
        toast('Resume deleted successfully');
        refreshData();
      })
      .catch((error) => {
        toast.error('Failed to delete resume');
        console.error('Delete error:', error);
      })
      .finally(() => {
        setLoading(false);
        setOpenAlert(false);
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/dashboard/resume/${resume.documentId}/edit`}>
        <div 
          className="p-6 h-[200px] relative group cursor-pointer"
          style={{
            background: `linear-gradient(135deg, ${resume?.themeColor}15, ${resume?.themeColor}30)`
          }}
        >
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          {/* Resume Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300" />
              <img src='./cv.png'
                className="w-16 h-16 relative text-gray-500 group-hover:text-gray-100 transition-colors duration-300"
                style={{ color: resume?.themeColor }}
              />
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <h2 
            className="font-medium truncate"
            style={{ color: resume?.themeColor }}
          >
            {resume.title}
          </h2>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <div className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <MoreVertical className="h-4 w-4 text-gray-500" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem 
                onClick={() => navigate(`/dashboard/resume/${resume.documentId}/edit`)}
                className="cursor-pointer"
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}
                className="cursor-pointer"
              >
                <Eye className="w-4 h-4 mr-2" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}
                className="cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setOpenAlert(true)}
                className="cursor-pointer text-red-600 focus:text-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-2 flex items-center text-sm text-gray-500">
          Last modified: {new Date(resume.updatedAt).toLocaleDateString()}
        </div>
      </div>

      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Resume</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{resume.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={onDelete}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
            >
              {loading ? (
                <Loader2Icon className="w-4 h-4 animate-spin" />
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ResumeCardItem;