import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

export const ChallengeImageUpload = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setUploadedImages(prev => [...prev, e.target.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Banner Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg tracking-wide uppercase mb-4">
            Challenge Gallery
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Share Your Team Spirit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your challenge photos and showcase your team's dedication. Let the world see your passion!
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            <div className="text-center">
              <div 
                onClick={triggerFileInput}
                className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-12 hover:border-primary/50 transition-colors cursor-pointer group"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Upload Challenge Images
                    </h3>
                    <p className="text-muted-foreground">
                      Click to browse or drag and drop your team challenge photos
                    </p>
                    <p className="text-sm text-muted-foreground/80 mt-2">
                      Supports JPG, PNG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </Card>

          {/* Uploaded Images Gallery */}
          {uploadedImages.length > 0 && (
            <Card className="p-8">
              <div className="flex items-center space-x-2 mb-6">
                <ImageIcon className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Your Team Challenge Images ({uploadedImages.length})
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                      <img 
                        src={image} 
                        alt={`Challenge upload ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center space-x-4">
                <Button onClick={triggerFileInput} variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Add More Images
                </Button>
                <Button>
                  Submit Challenge Images
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};