using Microsoft.EntityFrameworkCore;
using TrackTuretWeb.Models;

namespace TrackTuretWeb.Data
{
    public class TrackTuretWebContext : DbContext
    {
        public TrackTuretWebContext(DbContextOptions<TrackTuretWebContext> options)
            : base(options)
        {
        }
        public DbSet<TrackTuretWeb.Models.Issue> Issue { get; set; }
    }
}