import { WindowRef } from './windowRef.service';
import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public scrolled: number = 0;
  
  public milestones = [
    { time      : 'January 1980',
      text      : 'Born.',
      background: '' },
    { time      : 'March 1982',
      text      : 'Younger brother, Heimir Dúnn, born.',
      background: '' },
    { time      : 'October 1987',
      text      : 'Youngest Brother, Kristófer Jökull, born.',
      background: '' },
    { time      : '1991',
      text      : 'Parents divorced, survival mode activated.',
      background: ''},
    { time      : 'May 1992',
      text      : 'Fjölnir Handball Club\'s most valuable player in my age group.',
      background: './assets/handball.jpg'},
    { time      : '1993',
      text      : 'Skipped 8th grade and moved to Skógar with my father.',
      background: ''},
    { time      : 'Fall of 1993',
      text      : 'Tought myself to play the guitar.',
      background: './assets/guitar.jpg'},
    { time      : 'May 1995',
      text      : 'Graduated from 10th grade with 8.25 average grade in Uniform tests.',
      background: ''},
    { time      : 'April 1996',
      text      : 'Chosen for the Iceland National Basketball Youth Team.',
      background: ''},
    { time      : 'Winter 1997',
      text      : 'Winner of a singing competition in Skógaskóli High School and competed in the finals of the National High School singing competition.',
      background: ''},
    { time      : 'May 1997',
      text      : 'Graduated from Skógarskóli High School with 10 extra credits and > 8 average grade and moved back to my mother in Grafarvogur, Reykjavík.',
      background: ''},
    { time      : 'Summer of 1997',
      text      : 'First heartbreak.',
      background: ''},
    { time      : '1997 - 1999',
      text      : 'First signs of depression and anxiety as I faded in and out of schools.',
      background: ''},
    { time      : 'Summer of 1999',
      text      : 'Had an epiphany that nothing good is going to happen unless you make it happen.',
      background: ''},
    { time      : '2000',
      text      : 'Winner of a Under 21 Cup Tournament in Snooker, first place in the rankings in Iceland\'s Second Division Snooker and won silver in the Under 21 Icelandic Championship in Snooker.',
      background: ''},
    { time      : 'May 2001',
      text      : 'Graduated from Ármúli Secondary School with 7.8 average grade.',
      background: ''},
    { time      : 'Summer 2001',
      text      : 'Starred in the most popular music video on PoppTV with the band "Útrás" and the song "Förum alla leið".',
      background: './assets/forum_alla_leid.jpg'},
    { time      : '2002',
      text      : 'Nominated for the FM957 Music Awards as "Best Newcomer" with the band "Útrás" and climbed to 3rd place in the Music Charts with the song "Leikfangið".',
      background: ''},
    { time      : 'Summer 2003',
      text      : 'Had two popular songs, "Crystal Clear" and "Know We Can Not", on the radiostation "X-ið" with the band "Core Blooming".',
      background: ''},
    { time      : 'Fall of 2004',
      text      : 'Met my soulmate, Dóra Gígja, survival mode deactivated, got in touch with the real me (que Svala\'s "The Real Me")',
      background: './assets/dora_ung.jpg'},
    { time      : '2005 - 2006',
      text      : 'Lived in England and finished a Diploma in Audio Engineering, realized how small the world is.',
      background: ''},
    { time      : 'January 2007',
      text      : 'Turned Vegan after opening my eyes to the needless suffering of animals in the animal agriculture industry.',
      background: ''},
    { time      : '2007',
      text      : 'Became obsessed with nature.',
      background: './assets/nature.gif'},
    { time      : 'February 2007',
      text      : 'Bought our first flat, a tiny second floor in an old house in Hafnarfjörður.',
      background: ''},
    { time      : 'August 2009',
      text      : 'Finished my first and only album as a solo artist, "All over the place", where I wrote the music and lyrics, played multiple instruments, sang, recorded, programmed, mixed and produced everything.',
      background: './assets/all_over_the_place_pearl.jpg'},
    { time      : 'May 2010',
      text      : 'Got back to Snooker for a bit, 3rd place in the rankings in Iceland\'s Top Division in Snooker and 5. - 8. place in the Icelandic Championship.',
      background: ''},
    { time      : '2010 - 2011',
      text      : 'Lived in a little fairytale house by the ocean just off Grindavík and began my love affair with waves and the sea.',
      background: ''},
    { time      : 'July 2010',
      text      : 'Proposed to the most wonderful woman on earth to which she accepted.',
      background: ''},
    { time      : 'August 2010',
      text      : 'Adopted a 4 year old Labrador Retriever, Esja.',
      background: ''},
    { time      : 'August 2011',
      text      : 'Esja had 7 puppies and we decided to keep one for ourselves, Álfa, and managed to find great fur-ever homes for the rest of the bunch.',
      background: './assets/atli_hvolpar.jpg'},
    { time      : 'January 2012',
      text      : 'Purchased a nice flat in Hafnarfjörður.',
      background: ''},
    { time      : 'August 2013',
      text      : 'Began my Computer Science studies at Reykjavík University, "Where\'s the ANY key?".',
      background: ''},
    { time      : 'September 2013',
      text      : 'Met my brogrammer, noble heart, Ægir Már.',
      background: ''},
    { time      : 'October 2013',
      text      : 'Realized that the world does not revolve around me, myself and I, after the birth of my first child, Áróra Sirrí.',
      background: './assets/arora.jpg'},
    { time      : 'May 2016',
      text      : 'Got my BSc Degree with an average grade of 9.32.',
      background: ''},
    { time      : '2016 - 2017',
      text      : 'Took a massive jump in my learning curve as a software developer, working with great people in an exciting startup, Mobiz.',
      background: ''},
    { time      : '2016',
      text      : 'Started my obsession with sweat pants.',
      background: ''},
    { time      : 'December 2016',
      text      : 'Had my second child, Kári Jökull, and moved to a nice house in Garður.',
      background: './assets/kari.jpg'},
    { time      : 'Currently',
      text      : 'Ever learning and evolving, never stagnating, being the best dad I possibly can, in an awesome relationship with my best friend, burning in my belly to leave the world a better place than when I found it.',
      background: './assets/super_dad.jpg'},
  ];

  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  /**
   * Change background picture based on current scroll position.
   */
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let browserHeight = this.document.defaultView.innerHeight;
    let scrollAmount  = this.document.body.scrollTop;
    let scrollHeight  = this.document.body.scrollHeight;
    if (scrollAmount < browserHeight * 8) {
      this.scrolled = 0;
    } else if (scrollAmount >= browserHeight * 8 && scrollAmount < scrollHeight - browserHeight * 2) {
      this.scrolled = 1;
    } else if (scrollAmount >= scrollHeight - browserHeight * 2) {
      this.scrolled = 2;
    }
  }
}
