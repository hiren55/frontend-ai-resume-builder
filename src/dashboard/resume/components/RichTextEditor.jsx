import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react';
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from 'react-simple-wysiwyg';
import { AIChatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';

const PROMPT = `position title: {positionTitle}, 
Depends on position title, give me 5-7 bullet points for my experience 
in resume (Please do not add experience level and No JSON array), 
give me result in HTML tags`;

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  // Function to clean up the AI response
  const cleanResponse = (text) => {
    return text
      .replace(/"/g, '') // Remove double quotes
      .replace(/[[\]]/g, ''); // Remove square brackets
  };

  const GenerateSummaryFromAI = async () => {
    if (!resumeInfo?.Experience[index]?.title) {
      toast('Please Add Position Title');
      return;
    }
    setLoading(true);
    const prompt = PROMPT.replace('{positionTitle}', resumeInfo.Experience[index].title);

    try {
      const result = await AIChatSession.sendMessage(prompt);
      const resp = result.response.text();
      setValue(cleanResponse(resp)); // Clean up AI response
    } catch (error) {
      toast.error('AI generation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Editor Section */}
      <div className="flex justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummaryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>

      {/* WYSIWYG Editor */}
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>

      {/* Preview Section */}
      {/* <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2">Preview</h3>
        <div
          className="p-4 border rounded-md bg-gray-50"
          dangerouslySetInnerHTML={{ __html: cleanResponse(value) }} // Render cleaned HTML content
        />
      </div> */}
    </div>
  );
}

export default RichTextEditor;