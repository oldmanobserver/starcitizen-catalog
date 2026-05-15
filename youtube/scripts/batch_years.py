"""Fetch video lists and download transcripts for multiple years in sequence.

Usage: python batch_years.py 2023 2022 2021 2020
"""
import subprocess
import sys
import os

PYTHON = sys.executable
# Data lives in youtube/ (parent of scripts/)
DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(DATA_DIR)

def run_step(label, args):
    print(f"\n{'='*60}")
    print(f"  {label}")
    print(f"{'='*60}\n")
    result = subprocess.run([PYTHON] + args, cwd=DATA_DIR)
    if result.returncode != 0:
        print(f"\nWARNING: {label} exited with code {result.returncode}")
    return result.returncode

def main():
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <year1> <year2> ...")
        print(f"Example: {sys.argv[0]} 2023 2022 2021 2020")
        sys.exit(1)

    years = sys.argv[1:]

    # Step 1: Fetch video lists for all years
    for year in years:
        video_file = os.path.join(year, f'video_list_{year}.json')
        if os.path.exists(video_file):
            print(f"\nSkipping fetch for {year} — {video_file} already exists")
        else:
            run_step(f"Fetching {year} video list", [os.path.join(SCRIPTS_DIR, 'fetch_year.py'), year])

    # Step 2: Download transcripts for each year
    for year in years:
        run_step(f"Building {year} catalog & downloading transcripts", [os.path.join(SCRIPTS_DIR, 'build_year_catalog.py'), year])

    print(f"\n{'='*60}")
    print(f"  ALL DONE — processed years: {', '.join(years)}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
