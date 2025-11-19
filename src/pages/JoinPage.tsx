import { CheckCircle, Users, Mail } from 'lucide-react';
import { useState } from 'react';
import { APPLICATION_OPEN, WEB3FORMS_ACCESS_KEY, EMAIL_RECIPIENT } from '../data/applicationConfig';
import { benefits, requirements } from '../data/joinPage';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    interests: '',
    experience: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    return email.endsWith('@ontariotechu.net');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    setSubmitStatus({ type: null, message: '' });

    // Validate email domain
    if (!validateEmail(formData.email)) {
      setEmailError('Please use your @ontariotechu.net email address. Personal emails (Gmail, Yahoo, etc.) are not accepted.');
      return;
    }

    setIsSubmitting(true);

    let response: Response | null = null;

    try {
      const formDataObj = new FormData(e.currentTarget);
      formDataObj.append('access_key', WEB3FORMS_ACCESS_KEY);
      formDataObj.append('subject', 'New EXOTU Application Form Submission');
      formDataObj.append('from_name', formData.name);
      formDataObj.append('from_email', formData.email);
      formDataObj.append('to', EMAIL_RECIPIENT);
      
      // Format all form data into a readable message
      const message = `
New Application Submission:

Name: ${formData.name}
Email: ${formData.email}
Major/Department: ${formData.major}
Year of Study: ${formData.year}
Areas of Interest: ${formData.interests}
Relevant Experience: ${formData.experience || 'Not provided'}
      `.trim();
      
      formDataObj.append('message', message);

      response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj,
      });

      // If HTTP response is OK (200-299), treat as success since email was sent
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We\'ll get back to you within 48 hours.' });
        setFormData({
          name: '',
          email: '',
          major: '',
          year: '',
          interests: '',
          experience: '',
        });
        e.currentTarget.reset();
      } else {
        // Try to get error message from response
        try {
          const result = await response.json();
          setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again later.' });
        } catch {
          setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
      }
    } catch (error) {
      // If we got a response and it was OK, treat as success even if there was an error
      if (response && response.ok) {
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We\'ll get back to you within 48 hours.' });
        setFormData({
          name: '',
          email: '',
          major: '',
          year: '',
          interests: '',
          experience: '',
        });
        e.currentTarget.reset();
      } else {
        // Network or other errors - but if email was sent, this might be a false negative
        console.error('Form submission error:', error);
        setSubmitStatus({ type: 'error', message: 'There was an issue submitting your request. If you received a confirmation, you\'re all set!' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-primary-vibrant/10 border border-primary-vibrant/30 rounded-full mb-6">
            <span className="text-sm text-primary-vibrant font-medium uppercase tracking-wide">Join EXOTU</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Be Part of Something
            <span className="block text-primary-vibrant">Extraordinary</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Join a team of passionate engineers and researchers building the future of human augmentation.
            No matter your background or experience level, there's a place for you at EXOTU.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Join EXOTU?</h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary-vibrant mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">What We're Looking For</h2>
            <div className="space-y-3 mb-8">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
            {APPLICATION_OPEN ? (
              <>
                <div className="text-center mb-8">
                  <Users size={48} className="text-primary-vibrant mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">Application Form</h2>
                  <p className="text-gray-400">
                    Fill out the form below and we'll get back to you within 48 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-vibrant focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ontario Tech Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setEmailError('');
                    }}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none ${
                      emailError ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-primary-vibrant'
                    }`}
                    placeholder="your.name@ontariotechu.net"
                    pattern="[a-zA-Z0-9._%+-]+@ontariotechu\.net"
                  />
                  {emailError ? (
                    <p className="text-sm text-red-400 mt-2">{emailError}</p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-2">
                      Must be an @ontariotechu.net email address
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Major/Department *
                  </label>
                  <input
                    type="text"
                    name="major"
                    required
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-vibrant focus:outline-none"
                    placeholder="Mechanical Engineering"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    required
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-primary-vibrant focus:outline-none"
                  >
                    <option value="">Select year</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Areas of Interest *
                </label>
                <textarea
                  name="interests"
                  required
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-vibrant focus:outline-none resize-none"
                  placeholder="e.g., Mechanical design, control systems, machine learning, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Relevant Experience (Optional)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-vibrant focus:outline-none resize-none"
                  placeholder="Tell us about any relevant coursework, projects, or experience..."
                />
              </div>

                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary-vibrant hover:bg-primary-muted disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <Mail size={20} />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <Users size={48} className="text-primary-vibrant mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Thank You for Your Interest</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Thank you for your interest in the Ontario Tech University Exoskeleton Design Team, unfortunately we aren't onboarding at the moment. See you soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
