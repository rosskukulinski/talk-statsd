## Outline


There are lots of monitoring and metric tools available to developers.  This goal of this talk is not to argue about which one you should use, but rather give you practical knowledge about using StatsD and Graphite from within NodeJS.

Also:
* This talk is not about setting up a Graphite/StatSD system.  There are other tutorials about configuring all of that.
* For this presentation, I'm making use of the auto-deployment 
* Also, Rackspace's deployment tool

* Graphite Overview
 (realtime):
  * Data collection
  * Data aggregation
  * Data storage
  * Data exploration
  * Data presentation (sorta)
  
  
* Graphite Data Collection
  * Lots of way to get data in:
  
* Graphite Data Retention
How often can you produce your data?
What is the finest precision you will require?
How far back will you need to look at that level of precision?
What is the coarsest precision you can use?
How far back would you ever need to see data? (yes it has to be finite, and determine ahead of time)
    

* StatsD 
  * What does it provide?
  * How does it work
  
* StatsD Clients
  * API
  * Lists
  
  
* Types of metrics
  * Counting
  * Timing
  * Gauges (arbitrary value)
    * If the gauge is not updated at the next flush, it will send the previous value
  * Sets (unique visitors to a site)
  * Sample Rates?


Namespacing

