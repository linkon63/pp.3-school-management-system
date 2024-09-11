<script>
export default {
    name: 'TestimonialCard'
};
</script>

<template>
    <div class="w-full p-10 flex flex-col justify-center items-center">
        <h1 class="lg:text-[2rem] md:text-[1.8rem] text-[1.4rem] font-sans font-bold text-green-700 text-shadow-md m-4">School Activities</h1>
        <!-- academic card -->
        <div class="border lg:h-[45vh] xl:h-[35vh] sm:h-auto w-full bg-white rounded-lg shadow-md m-2 flex lg:flex-row sm:flex-row flex-col justify-between">
            <img src="/landimg/academicimg.jpeg" alt="" class="lg:w-[40vh] xl:w-[50vh] sm:w-[25vh] w-full lg:rounded-r-none sm:rounded-r-none rounded-lg" />
            <div class="w-full p-5">
                <h1 class="lg:text-[1.5rem] sm:text-[1.4rem] text-shadow font-Archivo text-green-600">Academic</h1>
                <ul class="lg:text-[0.8rem] md:text-[0.7rem] text-[0.9rem]">
                    <li><span class="font-bold text-slate-900">Lectures:</span> Instruction on the curriculum content.</li>
                    <li><span class="font-bold text-slate-900">Exams and Test Preparation: </span>Written or oral assessments.</li>
                    <li><span class="font-bold text-slate-900">Projects: </span>Research or assignments on specific topics.</li>
                    <li><span class="font-bold text-slate-900">Homework:</span> Assignments completed outside of class.</li>
                    <li><span class="font-bold text-slate-900">Research: </span>In-depth analysis and investigation on a subject.</li>
                    <li><span class="font-bold text-slate-900">School Assemblies:</span> Discussions on various school-related topics.</li>
                    <li><span class="font-bold text-slate-900">Speeches and Presentations:</span> Students presenting on topics individually or in groups.</li>
                    <li><span class="font-bold text-slate-900">Lab Activities: </span>Practical experiments and observations, especially in science and technology.</li>
                    <li><span class="font-bold text-slate-900">Assignments: </span>Tasks to be completed within a specified time.</li>
                    <li><span class="font-bold text-slate-900">Workshops and Seminars: </span>Educational sessions led by experts.</li>
                </ul>
            </div>
        </div>

        <!-- co-caricullam card -->
        <div class="border lg:h-[45vh] xl:h-[35vh] sm:h-auto w-full bg-white rounded-lg shadow-md m-2 flex lg:flex-row sm:flex-row flex-col justify-between">
            <img src="/landimg/cocariculam.jpg" alt="" class="lg:w-[40vh] xl:w-[50vh] sm:w-[25vh] w-full lg:rounded-r-none sm:rounded-r-none rounded-lg" />
            <div class="w-full p-5">
                <h1 class="lg:text-[1.5rem] md:text-[1.8rem] text-[1.4rem] text-shadow font-Archivo text-green-600">Co-Curricular Activities</h1>
                <ul class="lg:text-[0.8rem] md:text-[0.7rem] text-[0.9rem]">
                    <li><span class="font-bold text-slate-900">Debate Club : </span> Engaging in structured discussions on various topics.</li>
                    <li><span class="font-bold text-slate-900">Drama Club : </span>Participating in theatrical performances and drama productions.</li>
                    <li><span class="font-bold text-slate-900">Music and Band : </span>Involvement in school choirs, bands, or music ensembles.</li>
                    <li><span class="font-bold text-slate-900">Art Club : </span> Exploring different forms of visual arts and crafts.</li>
                    <li><span class="font-bold text-slate-900">Science Club : </span>Conducting experiments and engaging in scientific discussions.</li>
                    <li><span class="font-bold text-slate-900">Literary Club : </span> Focusing on creative writing, reading, and literature discussions.</li>
                    <li><span class="font-bold text-slate-900">Sports Teams : </span>Participation in school sports like soccer, basketball, or swimming.</li>
                    <li><span class="font-bold text-slate-900">Scouts : </span>Involvement in scouting activities, including community service, outdoor adventures, and skill-building.</li>
                    <li><span class="font-bold text-slate-900">Social Club : </span>Organizing and participating in social events, community service, and leadership activities.</li>
                    <li><span class="font-bold text-slate-900">Culture Club : </span>Exploring and celebrating various cultural traditions and practices.</li>
                </ul>
            </div>
        </div>
        <!-- Sport&Games card -->
        <div class="border lg:h-[45vh] xl:h-[35vh] sm:h-auto w-full bg-white rounded-lg shadow-md m-2 flex lg:flex-row sm:flex-row flex-col justify-between">
            <img src="/landimg/sport.jpg" alt="" class="lg:w-[40vh] xl:w-[50vh] sm:w-[25vh] w-full lg:rounded-r-none sm:rounded-r-none rounded-lg" />
            <div class="w-full p-5">
                <h1 class="lg:text-[1.5rem] md:text-[1.8rem] text-[1.4rem] text-shadow font-Archivo text-green-600">Sports & Games</h1>
                <ul class="lg:text-[0.8rem] md:text-[0.7rem] text-[0.9rem]">
                    <li>
                        <span class="font-bold text-slate-900">Sports : </span> Football (Soccer), Basketball, Cricket, Tennis, Baseball, Volleyball, Hockey (Field and Ice), Badminton, Swimming, Athletics (Track and Field), Golf, Rugby, Table Tennis,
                        Cycling, Wrestling.
                    </li>
                    <li><span class="font-bold text-slate-900">Games : </span>Chess, Checkers, Scrabble, Monopoly, Sudoku, Crossword Puzzles, Board Games (like Risk or Clue), Card Games (like Poker or Bridge), Video Games,Darts.</li>
                </ul>
            </div>
        </div>
    </div>
</template>
