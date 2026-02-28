import React from 'react';
import { Shield, AlertCircle, CheckCircle, XCircle, FileText, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const RulesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Rules & Regulations</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Red Eagle Public School - Guidelines for maintaining discipline and a conducive learning environment
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-red-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Important Notice</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All students and parents are required to read and adhere to the school rules and regulations. 
                    Violation of any rule may result in disciplinary action including expulsion, suspension, or rustication. 
                    For any clarifications, please contact the school office.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* General Rules */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">General Rules</h2>
          </div>
          <Card className="border-none shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="space-y-4">
                {[
                  'Students should be neat and tidy in their school uniform and for all functions.',
                  'Each student should carry the Almanac to School everyday with his photograph and complete details.',
                  'The school building and property must be respected. Any damages done to the school property will be realized from the student responsible.',
                  'No student above Class VI can come casually dressed on birthdays or any other occasion.',
                  'Celebration of birthdays in the school canteen is not allowed.',
                  'Scribbling on walls and boards is a punishable offence.',
                  'The observance of the rules of discipline of the school and good behavior is an essential pre-requisite for a student\'s continuance in school. In case a Student violates the school rules, indulges in any form of indiscipline, strict actions like expulsion, suspension/rustication shall be taken against the student.',
                  'Bullying and use of foul language are punishable offences.'
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prohibited Practices */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Code of Conduct</h2>
            <p className="text-xl text-red-600 font-semibold">No student shall indulge in the following practices:</p>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {[
                  'Spitting in or near the school building, whistling or shouting',
                  'Damaging school property',
                  'Rowdyism',
                  'Use of violence in any form',
                  'Casteism, communalism or practice of untouchability',
                  'Smoking',
                  'Use of drugs, intoxicants'
                ].map((practice, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-100">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed font-medium">{practice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mt-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">
                    The School reserves the right to suspend or take disciplinary action against a student whose progress is unsatisfactory or whose conduct is harmful to other students.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">
                    No valuables like expensive watches, mobiles, i-pods, i-pads, surplus money may be brought to school.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Mobiles once confiscated, no claim will be entertained. The school phone is available for all students in cases of emergency.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Attendance & Leave Policy */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Attendance & Leave Policy</h2>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {[
                  'Half days will not be allowed to any child unless there is a medical or valid reason and the parents come to school and accompany the child back home.',
                  'Students who have been sick should bring a Medical Certificate from the Doctor on the day of re-joining School.',
                  'Parents should fill up the \'Record for Non-attendance\' for each day the student has been absent from School stating the reasons for his absence.',
                  'Students are not granted leave outside the regular vacation periods (except in case of illness). Students who do not join school on the days of reopening after vacations are liable to have their names struck off the school rolls unless otherwise informed earlier.',
                  'Repeated absence without leave or unexplained absence for more than 3 weeks renders the child\'s name struck off from the Rolls.'
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>

              {/* Attendance Requirements */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  Attendance Requirements
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Classes I-VIII:</strong> It is compulsory for students to maintain 80% attendance during the entire academic session so that they are eligible to appear for their Final Assessments.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Classes IX-XII:</strong> Students must have an average of 80% attendance before the examination. This percent can however be relaxed on medical grounds and the Principal's decision is final.
                  </p>
                  <p className="leading-relaxed font-semibold text-green-700">
                    ⭐ A certificate of merit will be given to students with 100% attendance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Medical & Health Guidelines */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical & Health Guidelines</h2>
            <p className="text-lg text-gray-600">
              Quarantine periods for contagious/infectious diseases
            </p>
          </div>
          <Card className="border-none shadow-lg bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <div className="mb-6 p-4 bg-white rounded-lg border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  A student returning to school after a contagious/infectious disease should produce a Doctor's certificate permitting him fit to attend school. Students suffering from the following diseases must observe the prescribed period of Quarantine before returning to School:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { disease: 'Chicken pox', period: 'Till scabs fall off' },
                  { disease: 'Cholera', period: 'Till the child is completely well' },
                  { disease: 'Measles', period: '2 weeks after the rashes disappear' },
                  { disease: 'Mumps', period: 'Until the swelling is gone (about 1 month)' },
                  { disease: 'Whooping Cough', period: '6 weeks' },
                  { disease: 'Jaundice', period: '6 weeks' },
                  { disease: 'Swine Flu', period: 'Till the time the Doctor specifies fit' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-blue-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(97 + idx)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.disease}</p>
                      <p className="text-sm text-gray-600">{item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Clarification?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            For any questions regarding rules and regulations, please contact the Red Eagle Public School office
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918400773055" className="inline-block">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Call School Office: +91 8400773055
              </button>
            </a>
            <a href="mailto:info@redeaglepublicschool.com" className="inline-block">
              <button className="bg-red-700 text-white hover:bg-red-800 px-8 py-4 rounded-lg font-semibold border-2 border-white transition-colors duration-200">
                Email Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RulesPage;
