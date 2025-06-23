import Booking from '../models/Booking.js';

// Generate unique 10-digit booking ID
const generateBookingId = async () => {
  while (true) {
    const bookingId = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    const existingBooking = await Booking.findOne({ bookingId });
    if (!existingBooking) {
      return bookingId;
    }
  }
};

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const {
      propertyName,
      propertyDetails,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      userName,
      userEmail,
      userPhone,
      message,
      totalPrice
    } = req.body;

    const userId = req.user._id;

    // Validate required fields
    if (!propertyName || !propertyDetails || !checkInDate || !checkOutDate || !userName || !userEmail || !userPhone || !numberOfGuests) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Validate number of guests
    if (numberOfGuests > propertyDetails.maxGuests) {
      return res.status(400).json({
        success: false,
        message: `Maximum ${propertyDetails.maxGuests} guests allowed for this property`
      });
    }

    // Generate unique booking ID
    const bookingId = await generateBookingId();

    // Calculate total price based on number of nights
    const nights = Math.max(1, Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)));
    const calculatedTotalPrice = propertyDetails.price * nights;

    // Create booking
    const booking = new Booking({
      bookingId,
      userId,
      propertyName,
      propertyDetails,
      checkInDate: new Date(checkInDate),
      checkOutDate: new Date(checkOutDate),
      numberOfGuests,
      totalPrice: calculatedTotalPrice,
      userName,
      userEmail,
      userPhone,
      message,
      status: 'confirmed'
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: 'Booking created successfully!',
      booking: {
        ...booking.toObject(),
        bookingId
      }
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
};

// Get user's bookings
export const getUserBookings = async (req, res) => {
  try {
    const userId = req.user._id;
    const bookings = await Booking.find({ userId })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message
    });
  }
};

// Cancel booking
export const cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const userId = req.user._id;

    const booking = await Booking.findOne({ bookingId, userId });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Booking is already cancelled'
      });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.status(200).json({
      success: true,
      message: 'Booking cancelled successfully!',
      booking
    });
  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error cancelling booking',
      error: error.message
    });
  }
};
