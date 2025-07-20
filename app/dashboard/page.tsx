"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, Calendar, Users, Target, TrendingUp, Download, MessageCircle, Plus, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FadeInSection } from "@/components/fade-in-section";
import { StaggeredFadeIn } from "@/components/staggered-fade-in";
import { AnimatedButton } from "@/components/animated-button";
import { ShimmerBackground } from "@/components/shimmer-background";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { useScheduleData } from "@/hooks/useScheduleData";

export default function DashboardPage() {
  const { user } = useUser();
  const router = useRouter();
  const {
    scheduleData,
    attendanceStats,
    loading: scheduleLoading,
    error: scheduleError,
    currentMonth,
    getMonthName,
    updateAttendance,
    navigateMonth,
    refreshData
  } = useScheduleData();

  // Redirect if not logged in
  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ShimmerBackground />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div
              className="content-overlay max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl"
              style={{
                border: '4px solid #8B4513',
                boxShadow: '0 8px 32px #8B451344',
                borderRadius: '2rem'
              }}
            >
                <h1 className="text-3xl md:text-4xl font-black mb-4 text-center" 
                  style={{ 
                    fontFamily: 'Noto Serif', 
                    fontWeight: 900,
                  color: '#8B4513',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
                  }}
                >
                Welcome Back, {user?.name || 'Student'}! 📚
              </h1>
              <p className="text-lg text-[#8b4513] font-semibold mb-8" 
                  style={{ 
                    fontFamily: "Noto Serif", 
                    fontWeight: 600,
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                  }}
                >
                Your Islamic education journey continues here
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <StaggeredFadeIn>
            
            {/* Student Information */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-3xl p-8 mb-8 border-2 border-amber-200">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-6 text-center" 
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                Student Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/50 rounded-xl p-4 border-2 border-[#8B4513]/20">
                  <p className="text-sm font-semibold text-[#8B4513] mb-1" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Full Name
                  </p>
                  <p className="text-lg font-bold text-[#8B4513]" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {user?.name || 'Not Available'}
                  </p>
                </div>
                <div className="bg-white/50 rounded-xl p-4 border-2 border-[#8B4513]/20">
                  <p className="text-sm font-semibold text-[#8B4513] mb-1" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Email
                  </p>
                  <p className="text-lg font-bold text-[#8B4513]" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {user?.email || 'Not Available'}
                  </p>
                      </div>
                <div className="bg-white/50 rounded-xl p-4 border-2 border-[#8B4513]/20">
                  <p className="text-sm font-semibold text-[#8B4513] mb-1" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Assigned Teacher
                  </p>
                  <p className="text-lg font-bold text-[#8B4513]" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {user?.assignedTeacher || 'Not Available'}
                  </p>
                      </div>
                    </div>
            </div>

            {/* Monthly Course Section */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-3xl p-8 border-2 border-amber-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#8B4513]" 
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
                  }}
                >
                  Monthly Course - {getMonthName(currentMonth)} 2025
                </h2>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => navigateMonth('prev')}
                    className="p-2 rounded-full bg-white/50 border-2 border-[#8B4513]/20 hover:bg-white/70 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => navigateMonth('next')}
                    className="p-2 rounded-full bg-white/50 border-2 border-[#8B4513]/20 hover:bg-white/70 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                        </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#8B4513] rounded-xl p-4 text-center shadow-lg">
                  <h3 className="text-white font-bold text-sm mb-1" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    Attend Classes
                  </h3>
                  <p className="text-white text-2xl font-black" 
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)'
                    }}
                  >
                    {scheduleLoading ? '...' : `${attendanceStats?.attended || 0}/${attendanceStats?.total || 0}`}
                  </p>
                          </div>
                <div className="bg-[#F5F5DC] rounded-xl p-4 text-center shadow-lg">
                  <h3 className="text-[#8B4513] font-bold text-sm mb-1" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                    }}
                  >
                    Canceled Classes
                  </h3>
                  <p className="text-[#8B4513] text-2xl font-black" 
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {scheduleLoading ? '...' : attendanceStats?.cancelled || 0}
                  </p>
                        </div>
                <div className="bg-[#8B4513] rounded-xl p-4 text-center shadow-lg">
                  <h3 className="text-white font-bold text-sm mb-1" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    Study Hours
                  </h3>
                  <p className="text-white text-2xl font-black" 
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)'
                    }}
                  >
                    {scheduleLoading ? '...' : `${attendanceStats?.studyHours || 0}/${attendanceStats?.total || 0}`}
                  </p>
                        </div>
                      </div>

              {/* Zoom Link */}
              <div className="bg-[#F5F5DC] rounded-xl p-4 mb-6 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-[#8B4513]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                  <span className="text-[#8B4513] font-bold text-lg" 
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                    }}
                  >
                    Zoom Link
                  </span>
                </div>
                <p className="text-[#8B4513] text-sm font-semibold" 
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                  }}
                >
                  {scheduleData.length > 0 ? 'zoom.com/sdsdsdjd/ssghayds/dsas' : 'Available when classes are scheduled'}
                </p>
            </div>

              {/* Welcome Message for New Students */}
              {scheduleData.length === 0 && !scheduleLoading && (
                <div className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-xl p-8 mb-6 border-2 border-amber-200 text-center">
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-3" 
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Welcome to Al-Azhar School! 📚
                  </h3>
                  <p className="text-[#8B4513] mb-4 text-lg" 
                          style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    You haven't been assigned to any courses yet. Our team will contact you soon to set up your personalized learning schedule.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      onClick={() => router.push('/contact')}
                      className="bg-[#8B4513] hover:bg-[#654321] text-white px-6 py-3 rounded-full font-semibold transition-all duration-200"
                            style={{ 
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      Contact Us
                    </Button>
                    <Button 
                      onClick={() => router.push('/services')}
                      variant="outline"
                      className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-200"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                      }}
                    >
                      View Courses
                    </Button>
                    <Button 
                      onClick={() => router.push('/settings')}
                      variant="outline"
                      className="border-amber-600 text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-full font-semibold transition-all duration-200"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                      }}
                    >
                      Account Settings
                    </Button>
                  </div>
                </div>
              )}

              {/* Schedule Table - Only show if there's data */}
              {scheduleData.length > 0 && (
                <div className="bg-white/50 rounded-xl p-6 border-2 border-[#8B4513]/20">
                  <h3 className="text-xl font-bold text-[#8B4513] mb-6 text-center" 
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Schedule
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-[#8B4513]/30">
                          <th className="text-left py-3 px-4 font-bold text-[#8B4513]" 
                            style={{
                              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                            }}
                          >
                            Study Days
                          </th>
                          <th className="text-left py-3 px-4 font-bold text-[#8B4513]" 
                            style={{
                              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                            }}
                          >
                            Assigned Teacher
                          </th>
                          <th className="text-left py-3 px-4 font-bold text-[#8B4513]" 
                            style={{
                              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                            }}
                          >
                            Study Time - UK
                          </th>
                          <th className="text-left py-3 px-4 font-bold text-[#8B4513]" 
                            style={{
                              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                            }}
                          >
                            Study Time - EG
                          </th>
                          <th className="text-left py-3 px-4 font-bold text-[#8B4513]" 
                            style={{
                              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                            }}
                          >
                            Attendance
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleLoading ? (
                          <tr>
                            <td colSpan={5} className="py-8 text-center text-[#8B4513]">
                              <div className="flex items-center justify-center gap-2">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#8B4513]"></div>
                                <span style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
                                  Loading schedule...
                                </span>
                              </div>
                            </td>
                          </tr>
                        ) : scheduleError ? (
                          <tr>
                            <td colSpan={5} className="py-8 text-center text-red-600" 
                              style={{
                                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                              }}
                            >
                              Error loading schedule. Please try again.
                            </td>
                          </tr>
                        ) : (
                          scheduleData.map((classItem) => (
                            <tr key={classItem.id} className="border-b border-[#8B4513]/20">
                              <td className="py-3 px-4 text-[#8B4513] font-semibold" 
                                style={{
                                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}
                              >
                                {classItem.day}, {classItem.date}
                              </td>
                              <td className="py-3 px-4 text-[#8B4513]" 
                                style={{
                                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}
                              >
                                {classItem.teacher}
                              </td>
                              <td className="py-3 px-4 text-[#8B4513]" 
                                style={{
                                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}
                              >
                                {classItem.timeUK}
                              </td>
                              <td className="py-3 px-4 text-[#8B4513]" 
                                style={{
                                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}
                              >
                                {classItem.timeEG}
                              </td>
                              <td className="py-3 px-4">
                                {classItem.status === 'cancelled' ? (
                                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold" 
                                    style={{
                                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                    }}
                                  >
                                    Cancelled X
                                  </span>
                                ) : (
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => updateAttendance(classItem.id, 'attended')}
                                      className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
                                      style={{
                                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                      }}
                                    >
                                      Attend
                                    </button>
                                    <button
                                      onClick={() => updateAttendance(classItem.id, 'cancelled')}
                                      className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-colors"
                                      style={{
                                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                      }}
                                    >
                                      Cancel
                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </StaggeredFadeIn>
        </div>
      </section>
    </div>
  );
} 