import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewSection = () => {
  // Fake review data
  const reviews = [
    {
      id: 1,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      author: "Awlad Hossin",
      role: "Senior Product Designer",
      rating: 5,
      avatar: "AH"
    },
    {
      id: 2,
      text: "This product has significantly improved my back pain. The gentle reminder to keep my shoulders back has become second nature. Highly recommend for anyone working long hours at a desk.",
      author: "Sarah Johnson",
      role: "Software Engineer",
      rating: 4,
      avatar: "SJ"
    },
    {
      id: 3,
      text: "Initially skeptical, but after 3 weeks of consistent use, I noticed a real difference in my posture. The material is comfortable and doesn't restrict movement during daily activities.",
      author: "Michael Chen",
      role: "Physical Therapist",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 4,
      text: "Good quality product with effective results. The adjustable straps make it suitable for different body types. My only concern is it can get warm during summer months.",
      author: "Emma Rodriguez",
      role: "Marketing Manager",
      rating: 4,
      avatar: "ER"
    },
    {
      id: 5,
      text: "Perfect for remote workers! Easy to wear under clothing and provides consistent support. I've recommended it to my entire team and they love it too.",
      author: "David Kim",
      role: "Project Manager",
      rating: 5,
      avatar: "DK"
    },
    {
      id: 6,
      text: "The posture corrector is well-built and comfortable. It helped me become more aware of my slouching habits. Takes some time to get used to, but worth the investment.",
      author: "Lisa Thompson",
      role: "Graphic Designer",
      rating: 4,
      avatar: "LT"
    },
    {
      id: 7,
      text: "Excellent product for anyone looking to improve their posture. The support is firm but not restrictive. I wear it during work hours and it's been a game-changer.",
      author: "James Wilson",
      role: "Data Analyst",
      rating: 5,
      avatar: "JW"
    },
    {
      id: 8,
      text: "Very satisfied with this purchase. The posture corrector is discreet and effective. I've noticed less shoulder tension and better alignment after just two weeks of use.",
      author: "Rachel Green",
      role: "UX Designer",
      rating: 4,
      avatar: "RG"
    },
    {
      id: 9,
      text: "Great investment for long-term health. The corrector is lightweight and breathable. It's helped me develop better posture habits even when I'm not wearing it.",
      author: "Alex Parker",
      role: "Content Writer",
      rating: 5,
      avatar: "AP"
    },
    {
      id: 10,
      text: "Solid product with noticeable results. The adjustment period was minimal, and it integrates well into my daily routine. Would definitely purchase again.",
      author: "Nina Patel",
      role: "Business Analyst",
      rating: 4,
      avatar: "NP"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 1;
  
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
        <p className="text-gray-600">See what our customers are saying about our posture corrector</p>
      </div>

      <div className="grid gap-6 mb-8">
        {currentReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 max-w-2xl mx-auto w-full"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                {review.avatar}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{review.author}</h3>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              {renderStars(review.rating)}
              <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          Previous
        </button>

        <div className="flex items-center space-x-3">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-blue-600 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
                aria-label={`Go to page ${page}`}
              />
            );
          })}
        </div>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
          }`}
        >
          Next
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      {/* Page info */}
      <div className="text-center mt-4 text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default ReviewSection;