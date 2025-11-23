import { useState } from 'react';
import { X, Upload, MapPin, Calendar, DollarSign } from 'lucide-react';

export default function NewProjectModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    budget: '',
    startDate: '',
    endDate: '',
  });
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Project created! (Demo)');
    onClose();
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          {/* Modal */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
              <h2 className="text-lg font-semibold text-[#1a1a1a]">New Project</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-[#F5F5F5] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#666]" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Project Name */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Oak Street Townhomes"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g., Tempe, AZ"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                  Budget
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999]" />
                  <input
                    type="number"
                    placeholder="e.g., 500000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                    Est. End Date
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                  Blueprints / Documents
                </label>
                <div className="border-2 border-dashed border-[#E5E5E5] rounded-lg p-6 text-center hover:border-[#FFA500] transition-colors">
                  <Upload className="w-8 h-8 text-[#999] mx-auto mb-2" />
                  <p className="text-sm text-[#666] mb-2">
                    Drag files here or{' '}
                    <label className="text-[#FFA500] cursor-pointer hover:text-[#E69500]">
                      browse
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.png,.jpg,.dwg"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </p>
                  <p className="text-xs text-[#999]">PDF, PNG, JPG, DWG up to 50MB</p>
                </div>

                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-3 py-2 bg-[#F5F5F5] rounded-lg"
                      >
                        <span className="text-sm text-[#1a1a1a] truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-[#999] hover:text-[#666]"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 border border-[#E5E5E5] text-[#666] font-medium rounded-lg hover:bg-[#F5F5F5] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-[#FFA500] text-white font-medium rounded-lg hover:bg-[#E69500] transition-colors"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
