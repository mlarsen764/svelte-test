<script>
    // Get current date information
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    // Month names for display
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Day names for display
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Function to generate calendar days
    function generateCalendarDays(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        let days = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push({ day: '', isCurrentMonth: false });
        }
        
        // Add days of the current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({ 
                day: i, 
                isCurrentMonth: true,
                isToday: i === currentDate.getDate() && 
                         month === currentDate.getMonth() && 
                         year === currentDate.getFullYear()
            });
        }
        
        return days;
    }
    
    // Reactive statement to update calendar when month/year changes
    $: calendarDays = generateCalendarDays(currentMonth, currentYear);
    
    // Navigation functions
    function previousMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
    }
    
    function nextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
    }
</script>

<style>
    .calendar-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }
    
    .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
    }
    
    .day-name {
        text-align: center;
        font-weight: bold;
        padding: 0.5rem;
        background-color: var(--bg-2);
    }
    
    .day {
        height: 80px;
        padding: 0.5rem;
        background-color: var(--bg-2);
        border-radius: var(--border-radius);
        text-align: right;
    }
    
    .day.empty {
        background-color: var(--bg-3);
    }
    
    .day.today {
        background-color: var(--accent-bg);
        color: var(--accent-fg);
    }
    
    .nav-button {
        background: var(--bg-2);
        border: none;
        border-radius: var(--border-radius);
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    
    .nav-button:hover {
        background: var(--bg-3);
    }
</style>

<div class="calendar-container">
    <h1>Calendar</h1>
    
<div class="calendar-header">
  <button class="nav-button" on:click={previousMonth}>Previous</button>
  <h2>{monthNames[currentMonth]} {currentYear}</h2>
  <button class="nav-button" on:click={nextMonth}>Next</button>
</div>
    
    <div class="calendar-grid">
        {#each dayNames as day}
            <div class="day-name">{day}</div>
        {/each}
        
        {#each calendarDays as { day, isCurrentMonth, isToday }}
            <div class="day {!isCurrentMonth ? 'empty' : ''} {isToday ? 'today' : ''}">
                {day}
            </div>
        {/each}
    </div>
</div>
