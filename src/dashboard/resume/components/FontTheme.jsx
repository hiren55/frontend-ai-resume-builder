import React, { useContext, useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { Type } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function FontTheme() {
    const fonts = [
        {
            name: "Inter",
            family: "'Inter', sans-serif",
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        },
        {
            name: "Roboto",
            family: "'Roboto', sans-serif",
            url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        },
        {
            name: "Playfair Display",
            family: "'Playfair Display', serif",
            url: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
        },
        {
            name: "Lato",
            family: "'Lato', sans-serif",
            url: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        },
        {
            name: "Source Sans Pro",
            family: "'Source Sans Pro', sans-serif",
            url: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
        },
        {
            name: "Montserrat",
            family: "'Montserrat', sans-serif",
            url: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        },
        {
            name: "Open Sans",
            family: "'Open Sans', sans-serif",
            url: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        },
        {
            name: "Raleway",
            family: "'Raleway', sans-serif",
            url: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
        },
        {
            name: "Merriweather",
            family: "'Merriweather', serif",
            url: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
        },
        {
            name: "Poppins",
            family: "'Poppins', sans-serif",
            url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        }
    ];

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [selectedFont, setSelectedFont] = useState(resumeInfo?.fontFamily || fonts[0].family);
    const { resumeId } = useParams();

    // Load all fonts
    React.useEffect(() => {
        fonts.forEach(font => {
            const link = document.createElement('link');
            link.href = font.url;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        });
    }, []);

    const onFontSelect = (font) => {
        setSelectedFont(font.family);
        setResumeInfo({
            ...resumeInfo,
            fontFamily: font.family
        });
        
        const data = {
            data: {
                fontFamily: font.family
            }
        };
        
        GlobalApi.UpdateResumeDetail(resumeId, data).then(resp => {
            console.log(resp);
            toast('Font Theme Updated');
        });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" 
                    className="flex gap-2">
                    <Type className="w-4 h-4" />Font
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
                <div className="p-4 border-b border-gray-100">
                    <h2 className='text-sm font-bold'>Select Font Theme</h2>
                    <p className="text-xs text-gray-500 mt-1">Choose a font that best represents your style</p>
                </div>
                <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                    <div className='p-2'>
                        {fonts.map((font, index) => (
                            <div
                                key={index}
                                onClick={() => onFontSelect(font)}
                                className={`p-3 cursor-pointer rounded-md transition-all
                                    ${selectedFont === font.family 
                                        ? 'bg-gray-100 border border-gray-300' 
                                        : 'hover:bg-gray-50'}`}
                                style={{ fontFamily: font.family }}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-base font-medium">{font.name}</p>
                                    {selectedFont === font.family && (
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                    The quick brown fox jumps over the lazy dog
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default FontTheme;